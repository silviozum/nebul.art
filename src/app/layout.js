import { Anton, Raleway , Lora} from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"], // Subsets disponíveis para a fonte
  weight: "400", // Peso disponível para Anton (normal é 400)
});

export const metadata = {
  title: "Nebul.art",
  description: "CyberArt",
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos para Raleway (normal e bold)
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos para Raleway (normal e bold)
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${raleway.variable} ${lora.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
