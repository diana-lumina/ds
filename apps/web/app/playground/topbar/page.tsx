'use client'

import * as React from 'react'
import { Topbar } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'


const navLinks = [
    { label: 'Programas y experiencias', href: '#' },
    { label: 'Conócenos', href: '#' },
    { label: 'Marcas', href: '#' },
    { label: 'Organizaciones', href: '#' },
]

const ANNOUNCEMENT = {
    message:
        'Este es un anuncio, al cual el administrador del sitio puede cambiar de acuerdo a lo que se necesite anunciar.',
    onClose: () => console.log('anuncio cerrado'),
}

export default function TopbarPage() {
    const [searchOpen, setSearchOpen] = React.useState(false)

    return (
        <div className="p-6 flex flex-col gap-8">
            <PlaygroundHeader title="Topbar" storybookPath="topbar" />

            {/* ── Default ── */}
            <section className="flex flex-col gap-2">
                <h2 className="text-sm text-muted-foreground">LoggedOut</h2>
                <div className="border rounded-lg overflow-hidden">
                    <Topbar
                        appName="Tec 360"
                        navItems={navLinks}
                        showCartButton
                        cartCount={0}
                        onLogin={() => console.log('login')}
                        onRegister={() => console.log('register')}
                    />
                </div>
            </section>

            {/* ── Default + Announcement ── */}
            <section className="flex flex-col gap-2">
                <h2 className="text-sm text-muted-foreground">LoggedOut / Anuncio</h2>
                <div className="border rounded-lg overflow-hidden">
                    <Topbar
                        appName="Tec 360"
                        navItems={navLinks}
                        showCartButton
                        cartCount={0}
                        onLogin={() => console.log('login')}
                        onRegister={() => console.log('register')}
                        announcement={ANNOUNCEMENT}
                    />
                </div>
            </section>

            {/* ── Search standalone ── */}
            <section className="flex flex-col gap-2">
                <h2 className="text-sm text-muted-foreground">Search</h2>
                <div className="border rounded-lg overflow-hidden">
                    <Topbar
                        variant="search"
                        onSearch={(val) => console.log(val)}
                    />
                </div>
            </section>

            {/* ── Logged In ── */}
            <section className="flex flex-col gap-2">
                <h2 className="text-sm text-muted-foreground">LoggedIn </h2>
                <div className="border rounded-lg overflow-hidden">
                    <Topbar
                        variant="logged-in"
                        appName="Tec 360"
                        navItems={navLinks}
                        showCartButton
                        showNotificationsButton
                        cartCount={0}
                        notificationsCount={0}
                        user={{
                            avatarUrl: 'https://github.com/shadcn.png',
                        }}
                        onUserMenuClick={() => console.log('user menu')}
                    />
                </div>
            </section>


            {/* ── Logged In + Announcement ── */}
            <section className="flex flex-col gap-2">
                <h2 className="text-sm text-muted-foreground">LoggedIn / Anuncio</h2>
                <div className="border rounded-lg overflow-hidden">
                    <Topbar
                        variant="logged-in"
                        appName="Tec 360"
                        navItems={navLinks}
                        showCartButton
                        cartCount={0}
                        showNotificationsButton
                        notificationsCount={0}
                        user={{
                            avatarUrl: 'https://github.com/shadcn.png',
                        }}
                        onUserMenuClick={() => console.log('user menu')}
                        announcement={ANNOUNCEMENT}
                    />
                </div>
            </section>
        </div>
    )
}