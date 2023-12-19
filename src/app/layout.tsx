
import React from 'react';
import { MyContextProvider } from '../app/MyContext';


export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      
      <body> <MyContextProvider>{children} </MyContextProvider></body>
     
    </html>
  );
}