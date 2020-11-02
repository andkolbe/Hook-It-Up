import React from 'react'

const Layout = ({ children }) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                {children}
            </section>
        </main>
    );
}

export default Layout;