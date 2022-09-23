import { structure, inspector, Structure } from "@/state"
import { Scrollable } from "@/ui"
import { NodeID } from "@solid-devtools/shared/graph"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { Accessor, Component, createMemo, createSignal, For, Setter, Show } from "solid-js"
import { OwnerNode } from "./OwnerNode"
import { OwnerPath } from "./Path"
import * as styles from "./structure.css"

export default function StructureView() {
  return (
    <div class={styles.panelWrapper}>
      <DisplayStructureTree />
      <div class={styles.path}>
        <div class={styles.pathInner}>
          <Show when={inspector.state.details?.path}>
            <OwnerPath path={inspector.state.details!.path} />
          </Show>
        </div>
      </div>
    </div>
  )
}

type DisplayNode = {
  node: Structure.Node
  level: Accessor<number>
  setLevel: Setter<number>
}

const remToPx = (rem: number): number =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

let $startIndex = 20
let $endIndex = 0
let $index = 0
let $nextList: DisplayNode[] = []
let $prevMap: Record<NodeID, DisplayNode> = {}

function mapNode(node: Structure.Node, newLevel: number): void {
  const prev = $prevMap[node.id]
  if (prev) {
    $nextList.push(prev)
    prev.setLevel(newLevel)
  } else {
    const [level, setLevel] = createSignal(newLevel)
    $nextList.push({ node, level, setLevel })
  }
}

function mapNodes(nodes: readonly Structure.Node[], level: number): void {
  for (const node of nodes) {
    const { children, length } = node
    const i = $index++

    // above the visible
    if (i < $startIndex) {
      // some nested children are visible
      if (i + length >= $startIndex) mapNodes(children, level + 1)
      // all nested children are invisible — skip
      else $index += length
    }
    // visible
    else if (i <= $endIndex) {
      mapNode(node, level)
      mapNodes(children, level + 1)
    }
    // below the visible
    else break
  }
}

const DisplayStructureTree: Component = props => {
  const [containerScroll, setContainerScroll] = createSignal({ top: 0, height: 0 })

  const updateScrollData = (el: HTMLElement) =>
    setContainerScroll({ top: el.scrollTop, height: el.clientHeight })

  const tree = createMemo<{
    length: number
    start: number
    end: number
    list: readonly DisplayNode[]
    rootList: readonly Structure.Node[]
  }>((prev = { length: 0, start: 0, end: 0, list: [], rootList: [] }) => {
    const rootList = structure.structure()
    const { top, height } = containerScroll()
    const rowHeight = remToPx(styles.ROW_HEIGHT_IN_REM)

    $startIndex = Math.floor(top / rowHeight)
    $endIndex = $startIndex + Math.ceil(height / rowHeight)

    if (prev.rootList === rootList && prev.start === $startIndex && prev.end === $endIndex)
      return prev

    let length = 0
    for (const root of rootList) length += root.length + 1

    $index = 0
    $nextList = []
    $prevMap = {}
    for (const node of prev.list) $prevMap[node.node.id] = node

    mapNodes(rootList, 0)

    return { length, list: $nextList, start: $startIndex, end: $endIndex, rootList }
  })

  return (
    <Scrollable
      ref={el => setTimeout(() => updateScrollData(el))}
      onScroll={e => updateScrollData(e.currentTarget)}
    >
      <div
        class={styles.scrolledOuter}
        style={assignInlineVars({
          [styles.treeLength]: tree().length.toString(),
          [styles.startIndex]: tree().start.toString(),
        })}
      >
        <div class={styles.scrolledInner}>
          <For each={tree().list}>
            {({ node, level }) => <OwnerNode owner={node} level={level()} />}
          </For>
        </div>
      </div>
    </Scrollable>
  )
}
