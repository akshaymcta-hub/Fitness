import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'ABS Fitness Club | Transform Your Life',
  description: 'Premium gym and fitness club for strength, cardio, and wellness.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body suppressHydrationWarning className="font-poppins bg-cream text-dark overflow-x-hidden relative min-h-screen">
        {/* Background Decorative Shapes */}
        <div className="fixed top-[-100px] right-[-100px] w-[600px] h-[600px] bg-primary rounded-full opacity-10 blur-[120px] -z-10"></div>
        <div className="fixed bottom-[-150px] left-[-50px] w-[500px] h-[500px] bg-coral rounded-full opacity-10 blur-[120px] -z-10"></div>
        <div className="fixed top-[40%] left-[20%] w-[400px] h-[400px] bg-accent rounded-full opacity-5 blur-[120px] -z-10"></div>
        
        {children}
      </body>
    </html>
  );
}
