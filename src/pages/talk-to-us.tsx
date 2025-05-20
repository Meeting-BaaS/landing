import Cal, { getCalApi } from '@calcom/embed-react'
import React, { useEffect } from 'react'

import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'

const OverviewBlock = (): JSX.Element => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold">
            Schedule a Quick Chat or Deep-Dive Meeting 🤿 🐟{' '}
        </h2>
        <h3 className="text-xl font-semibold">Maximize Our Time Together</h3>
        <p>
            To ensure a productive discussion, please provide a clear agenda or
            purpose for our meeting. Meetings without a defined objective may be
            held via email, as we aim to make the most of our time.
        </p>
        <br />
    </div>
)

const TalkToUs = () => {
    useEffect(() => {
        ;(async function () {
            const cal = await getCalApi()
            cal('ui', {
                theme: 'light',

                styles: { branding: { brandColor: '#78FFF0' } },

                hideEventTypeDetails: false,
                layout: 'month_view',
            })
        })()
    }, [])

    useEffect(() => {
        console.log('useEffect +++++++++++++++++++++')
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    // Vérifiez si le nœud est un élément HTML
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const element = node as HTMLElement // Assertion de type
                        console.log('Element: ', element)
                        // Utilisez maintenant element avec les propriétés d'HTMLElement
                        if (element.matches('--cal-bg')) {
                            console.log('Element matches selector: ', element)
                            // Assurez-vous que ce sélecteur cible correctement vos éléments
                            element.style.background = '#FFFAF0' // Modifiez les styles comme nécessaire
                        }
                    }
                })
            })
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })

        // Nettoyage en se désabonnant de l'observateur
        return () => observer.disconnect()
    }, [])

    return (
        <main className="">
            <SEO
                title="Meeting Baas 🐟 | Let's talk."
                description="Get in touch to scale your meeting bots, and create products and workflows on top."
            />
            <div className="select-none overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <div
                    id="top"
                    className=" px-2 lg:py-[50px] mt-[60px] pt-[160px] lg:px-[60px] w-full lg:max-h-screen  items-center flex flex-col justify-between max-w-screen-xl mx-auto"
                >
                    <OverviewBlock />
                    <Cal
                        calLink="team/meetingbaas/intro"
                        style={{
                            width: '100%',
                            height: '80%',
                            overflow: 'scroll',
                        }}
                        config={{ layout: 'week_view' }}
                    />
                    {/* <TwoColumnLayout title={''} subtitle={''} contents={[]} images={[]} codeExamples={[]} buttonToShow={[]} leftColumn={[]} rightColumn={[]}></TwoColumnLayout> */}
                </div>
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default TalkToUs
