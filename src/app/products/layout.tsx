export default function ProductLayout({children}:Readonly<{children:React.ReactNode;}>) {
    return (
        <main> {children}
            <p> NESTED LAYOUT  </p>
        </main>
         
  )}
  