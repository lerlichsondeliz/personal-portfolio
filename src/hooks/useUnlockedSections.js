import { useCallback, useState } from 'react'

export function useUnlockedSections() {
  const [unlocked, setUnlocked] = useState(() => new Set())

  const unlock = useCallback((id) => {
    setUnlocked((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }, [])

  const isUnlocked = useCallback((id) => unlocked.has(id), [unlocked])

  return { unlock, isUnlocked, unlockedIds: Array.from(unlocked) }
}
