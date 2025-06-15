import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col transition-colors"
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </motion.div>
  )
}

export default Layout
