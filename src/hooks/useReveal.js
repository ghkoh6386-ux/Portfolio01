import { useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  return { ref, visible: true }
}
