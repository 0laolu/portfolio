import { motion, AnimatePresence } from "framer-motion";
import { OrderProvider, useOrder } from "./state/OrderContext.jsx";
import DemoControlBar from "./components/DemoControlBar.jsx";
import PhoneShell from "./components/PhoneShell.jsx";
import Header from "./components/Header.jsx";
import MediaCarousel from "./components/MediaCarousel.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import Configurator from "./components/Configurator.jsx";
import DeliveryRouter from "./components/DeliveryRouter.jsx";
import BottomBar from "./components/BottomBar.jsx";
import PaymentModal from "./components/modals/PaymentModal.jsx";
import ReceiptModal from "./components/modals/ReceiptModal.jsx";
import WhatsAppModal from "./components/modals/WhatsAppModal.jsx";

function Storefront() {
  const { preset } = useOrder();
  return (
    <PhoneShell>
      <div className="no-scrollbar flex h-full flex-col overflow-y-auto">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={preset.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 pb-6"
          >
            <MediaCarousel />
            <ProductInfo />
            <Configurator />
            <DeliveryRouter />
          </motion.main>
        </AnimatePresence>
        <BottomBar />
      </div>
      <PaymentModal />
      <ReceiptModal />
      <WhatsAppModal />
    </PhoneShell>
  );
}

export default function App() {
  return (
    <OrderProvider>
      <div className="min-h-dvh bg-neutral-950 md:flex md:flex-col md:items-center md:justify-center md:gap-5 md:bg-[radial-gradient(60%_50%_at_50%_40%,#1d1d22_0%,#0a0a0b_70%)] md:py-6">
        <DemoControlBar />
        <Storefront />
        <p className="hidden text-[11px] text-neutral-600 md:block">
          Demo by <a href="https://0laoludev.netlify.app" className="text-neutral-400 hover:text-white">olaolu.</a> · fictional brands · no real payments
        </p>
      </div>
    </OrderProvider>
  );
}
