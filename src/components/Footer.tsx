export default function Footer() {
  return (
    <footer className="border-t border-white/10 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center text-[0.78rem] text-slate gap-4 md:gap-0 text-center md:text-left">
      <div><strong className="text-white/60 font-medium">Social Media Strategy Proposal</strong> · Prepared for Your Space Doctor · 2026</div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div>Confidential · All Rights Reserved</div>
        <div className="hidden md:block text-white/20">|</div>
        <div>Design by Abhishek Gujar</div>
      </div>
    </footer>
  );
}
