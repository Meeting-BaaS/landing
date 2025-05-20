import React from 'react'

interface TestimonialProps {
    lightTheme?: boolean
}

export const Testimonial: React.FC<TestimonialProps> = ({
    lightTheme = false,
}) => {
    const themeClasses = {
        outer: lightTheme ? 'bg-neutral-900' : 'bg-neutral-50',
        inner: lightTheme ? 'bg-neutral-50' : 'bg-neutral-900',
        text: lightTheme ? 'text-neutral-900' : 'text-white',
        name: lightTheme ? 'text-primary-700' : 'text-primary-500',
        role: lightTheme ? 'text-neutral-700' : 'text-neutral-300',
    }

    return (
        <div
            className={`flex justify-center items-center p-8 ${themeClasses.outer}`}
        >
            <div
                className={`${themeClasses.inner} rounded-2xl max-w-3xl mx-auto p-6`}
            >
                {/* <div className="w-full flex justify-center mb-4">

        <FiveStars />
        </div> */}
                <div
                    className={`text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl leading-tight sm:leading-none font-normal ${themeClasses.text} text-center`}
                >
                    "[Meetingbaas] just works, reliably. Powering{' '}
                    <a
                        href="https://claap.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 cursor-pointer hover:underline"
                        style={{
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            lineHeight: 'inherit',
                        }}
                    >
                        Claap
                    </a>{' '}
                    meeting recording under the hood."
                    <div className="text-center mt-6">
                        <p
                            className={`text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl leading-tight sm:leading-none font-black font-sansCondensed uppercase ${themeClasses.name}`}
                        >
                            ROBIN BONDUELLE
                        </p>
                        <p
                            className={`text-xs sm:text-sm md:text-base mt-1 ${themeClasses.role}`}
                        >
                            Claap CEO
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
