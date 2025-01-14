/**
 * Icons taken from https://phosphoricons.com
 */

import { Component } from 'solid-js'

export type IconProps = {
  color?: string
  bgColor?: string
  class?: string
}

export type IconComponent = Component<IconProps>

export const ArrowRight: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M40 128h176"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M144 56l72 72-72 72"
    />
  </svg>
)

export const ArrowLeft: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M216 128H40"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M112 56l-72 72 72 72"
    />
  </svg>
)

export const CarretRight: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <path
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M96 48l80 80-80 80"
    />
  </svg>
)

export const Eye: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <path
      d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72zm0 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <path
      d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
)

export const EyeSlash: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <path
      d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72zm0 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M48 40l160 176"
    />
    <path
      d="M154.9 157.6A39.6 39.6 0 0 1 128 168a40 40 0 0 1-26.9-69.6"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <path
      d="M74 68.6C33.2 89.2 16 128 16 128s32 72 112 72a117.9 117.9 0 0 0 54-12.6"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <path
      d="M208.6 169.1C230.4 149.6 240 128 240 128s-32-72-112-72a123.9 123.9 0 0 0-20.7 1.7"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <path
      d="M135.5 88.7a39.9 39.9 0 0 1 32.3 35.5"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
)

export const Refresh: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M176.2 99.7h48v-48"
    ></path>
    <path
      d="M190.2 190.2a88 88 0 1 1 0-124.4l34 33.9"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
  </svg>
)

export const Select: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <circle
      cx="128"
      cy="128"
      r="32"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <circle
      cx="128"
      cy="128"
      r="88"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M128 20v40"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M20 128h40"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M128 236v-40"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M236 128h-40"
    />
    <circle
      cx="128"
      cy="128"
      r="32"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
)

export const Options: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" class={props.class}>
    <circle
      cx="128"
      cy="128"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <circle
      cx="128"
      cy="48"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <circle
      cx="128"
      cy="208"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <circle
      cx="128"
      cy="128"
      r="24"
      stroke={props.color ?? 'currentColor'}
      stroke-miterlimit="10"
      stroke-width="16"
    />
    <circle
      cx="128"
      cy="48"
      r="24"
      stroke={props.color ?? 'currentColor'}
      stroke-miterlimit="10"
      stroke-width="16"
    />
    <circle
      cx="128"
      cy="208"
      r="24"
      stroke={props.color ?? 'currentColor'}
      stroke-miterlimit="10"
      stroke-width="16"
    />
  </svg>
)

export const X: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M200 56L56 200"
    />
    <path
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M200 200L56 56"
    />
  </svg>
)

export const Triangle: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <path
      fill={props.color ?? 'currentColor'}
      d="M236.7 188L148.8 36a24 24 0 0 0-41.6 0L19.3 188A23.9 23.9 0 0 0 40 224h176a23.9 23.9 0 0 0 20.7-36z"
    />
  </svg>
)

export const Root: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <path
      d="M213.4 109.6l-80-72.7a8 8 0 0 0-10.8 0l-80 72.7a8.3 8.3 0 0 0-2.6 5.9V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-92.5a8.3 8.3 0 0 0-2.6-5.9z"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <path
      d="M213.4 109.6l-80-72.7a8 8 0 0 0-10.8 0l-80 72.7a8.3 8.3 0 0 0-2.6 5.9V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-92.5a8.3 8.3 0 0 0-2.6-5.9z"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
)

export const Memo: IconComponent = props => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class={props.class}>
    <path
      d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27H26C26.2652 27 26.5196 26.8946 26.7071 26.7071C26.8946 26.5196 27 26.2652 27 26V11.4125C27.0005 11.2827 26.9753 11.154 26.926 11.0339C26.8766 10.9138 26.8041 10.8046 26.7125 10.7125L21.2875 5.28751C21.1955 5.19591 21.0862 5.12338 20.9661 5.07404C20.846 5.02471 20.7174 4.99955 20.5875 5.00001H6C5.73478 5.00001 5.48043 5.10536 5.29289 5.2929C5.10536 5.48044 5 5.73479 5 6.00001V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H10Z"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <path
      d="M27 11.4125V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6.00001C5 5.73479 5.10536 5.48044 5.29289 5.2929C5.48043 5.10536 5.73478 5.00001 6 5.00001H20.5875C20.7174 4.99955 20.846 5.02471 20.9661 5.07404C21.0862 5.12338 21.1955 5.19591 21.2875 5.28751L26.7125 10.7125C26.8041 10.8046 26.8766 10.9138 26.926 11.0339C26.9753 11.154 27.0005 11.2827 27 11.4125V11.4125Z"
      stroke={props.color ?? 'currentColor'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27"
      stroke={props.color ?? 'currentColor'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 9H12"
      stroke={props.color ?? 'currentColor'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export const Effect: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="rotate(-45 128.01 127.977)"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="rotate(-45 128.01 127.977)"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="rotate(-45 128.01 127.977)"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <circle cx="128" cy="128" r="12" fill={props.color ?? 'currentColor'} />
  </svg>
)

export const RenderEffect: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <path
      d="M215.9 73.7l-84-47.5a7.8 7.8 0 0 0-7.8 0l-84 47.5a8.1 8.1 0 0 0-4.1 7v94.6a8.1 8.1 0 0 0 4.1 7l84 47.5a7.8 7.8 0 0 0 7.8 0l84-47.5a8.1 8.1 0 0 0 4.1-7V80.7a8.1 8.1 0 0 0-4.1-7zM128 164a36 36 0 1 1 36-36 36 36 0 0 1-36 36z"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <path
      d="M220 175.3V80.7a8.1 8.1 0 0 0-4.1-7l-84-47.5a7.8 7.8 0 0 0-7.8 0l-84 47.5a8.1 8.1 0 0 0-4.1 7v94.6a8.1 8.1 0 0 0 4.1 7l84 47.5a7.8 7.8 0 0 0 7.8 0l84-47.5a8.1 8.1 0 0 0 4.1-7z"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <circle
      cx="128"
      cy="128"
      r="36"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
)

export const Computation: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <path
      d="M229.6 106l-25.9-14.4a73.6 73.6 0 0 0-6.3-10.9l.5-29.7a102.6 102.6 0 0 0-38.2-22l-25.4 15.2a88.3 88.3 0 0 0-12.6 0L96.2 28.9A104 104 0 0 0 58.1 51l.5 29.7a73.6 73.6 0 0 0-6.3 10.9l-26 14.4a103.6 103.6 0 0 0 .1 44l25.9 14.4a80.1 80.1 0 0 0 6.3 11l-.5 29.6a102.6 102.6 0 0 0 38.2 22l25.4-15.2a88.3 88.3 0 0 0 12.6 0l25.5 15.3a104 104 0 0 0 38.1-22.1l-.5-29.7a73.6 73.6 0 0 0 6.3-10.9l26-14.4a102 102 0 0 0-.1-44zM128 176a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"
      opacity={props.bgColor ? undefined : '0.2'}
      fill={props.bgColor ?? 'currentColor'}
    />
    <circle
      cx="128"
      cy="128"
      r="48"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <path
      d="M197.4 80.7a73.6 73.6 0 0 1 6.3 10.9l25.9 14.4a102 102 0 0 1 .1 44l-26 14.4a73.6 73.6 0 0 1-6.3 10.9l.5 29.7a104 104 0 0 1-38.1 22.1l-25.5-15.3a88.3 88.3 0 0 1-12.6 0L96.3 227a102.6 102.6 0 0 1-38.2-22l.5-29.6a80.1 80.1 0 0 1-6.3-11L26.4 150a103.6 103.6 0 0 1-.1-44l26-14.4a73.6 73.6 0 0 1 6.3-10.9L58.1 51a104 104 0 0 1 38.1-22.1l25.5 15.3a88.3 88.3 0 0 1 12.6 0L159.7 29a102.6 102.6 0 0 1 38.2 22z"
      fill="none"
      stroke={props.color ?? 'currentColor'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
)

export const Context: IconComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={props.class}>
    <g fill={props.bgColor ?? 'currentColor'}>
      <rect
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        opacity={props.bgColor ? undefined : '0.2'}
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        opacity={props.bgColor ? undefined : '0.2'}
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        opacity={props.bgColor ? undefined : '0.2'}
      />
      <rect
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        fill="none"
        stroke={props.color ?? 'currentColor'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        fill="none"
        stroke={props.color ?? 'currentColor'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        fill="none"
        stroke={props.color ?? 'currentColor'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        fill="none"
        stroke={props.color ?? 'currentColor'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        d="M80 128h40"
      />
      <path
        d="M160 184h-16a23.9 23.9 0 0 1-24-24V96a23.9 23.9 0 0 1 24-24h16"
        fill="none"
        stroke={props.color ?? 'currentColor'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
)
