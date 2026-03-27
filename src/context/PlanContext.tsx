import { createContext, useContext, useState, ReactNode } from 'react';

export const plans = [
  {
    price: 45000,
    total: "₹45,000 / month",
    reels: 15,
    static: 12,
    shootDays: 3,
    igFreq: "6–7 posts/week",
    liFreq: "3–4 posts/week",
    ytFreq: "3–4 Shorts/week",
    views: "Est. 25K+",
    progress: 0
  },
  {
    price: 60000,
    total: "₹60,000 / month",
    reels: 20,
    static: 16,
    shootDays: 4,
    igFreq: "8–9 posts/week",
    liFreq: "4–5 posts/week",
    ytFreq: "5 Shorts/week",
    views: "Est. 50K+",
    progress: 33.33
  },
  {
    price: 75000,
    total: "₹75,000 / month",
    reels: 25,
    static: 20,
    shootDays: 5,
    igFreq: "10–12 posts/week",
    liFreq: "5–6 posts/week",
    ytFreq: "6 Shorts/week",
    views: "Est. 80K+",
    progress: 66.66
  },
  {
    price: 90000,
    total: "₹90,000 / month",
    reels: 30,
    static: 24,
    shootDays: 6,
    igFreq: "12–14 posts/week",
    liFreq: "6–7 posts/week",
    ytFreq: "7+ Shorts/week",
    views: "Est. 120K+",
    progress: 100
  }
];

const PlanContext = createContext({
  idx: 0,
  setIdx: (idx: number) => {},
  plan: plans[0]
});

export function PlanProvider({ children }: { children: ReactNode }) {
  const [idx, setIdx] = useState(0);
  return (
    <PlanContext.Provider value={{ idx, setIdx, plan: plans[idx] }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
