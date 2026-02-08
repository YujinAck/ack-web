
import { motion } from "framer-motion";
import AckLogoPng from '../assets/ack-logo.png'
const HeaderComponent = ({ title }) => {
  return (
       <header className="w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50" style={{borderBottom:'solid 7px #ce1a38'}}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" >
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-semibold tracking-tight"
        >
           <img src={AckLogoPng} alt="ACK LOGO ICON" style={{ width: '80px', height: '80px' }} />
        </motion.div>

        {/* Navigation */}
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#" className="transition-colors hover:text-foreground">Careers</a>
          <a href="#" className="transition-colors hover:text-foreground">About</a>
          <a href="#" className="transition-colors hover:text-foreground">Contact Us</a>
        </nav>

        {/* Action */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="rounded-2xl px-5">Get Started</div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderComponent;