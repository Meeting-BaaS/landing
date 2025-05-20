//TODO: change to auth.meetingbaas.com
export function registerRedirect(props: { redirect?: string | null }) {
    if (typeof window !== 'undefined') {
        window.location.href = props.redirect
            ? `https://auth.meetingbaas.com/sign-up?redirectTo=${props.redirect}`
            : `https://auth.meetingbaas.com/sign-up`
    }
}

export function transcriptSeeker() {
    if (typeof window !== 'undefined') {
        window.open('https://meetingbaas.com/transcript-seeker/', '_blank')
    }
}

export function tryAiChat() {
    if (typeof window !== 'undefined') {
        window.open('https://chat.meetingbaas.com/', '_blank')
    }
}

export function baasDocumentation() {
    if (typeof window !== 'undefined') {
        window.open('https://doc.meetingbaas.com/', '_blank')
    }
}

export function cloneOnGithub() {
    if (typeof window !== 'undefined') {
        window.open(
            'https://github.com/Meeting-Baas/transcript-seeker',
            '_blank',
        )
    }
}

export function openGoogleApiReference() {
    if (typeof window !== 'undefined') {
        window.open(
            'https://developers.google.com/meet/api/guides/artifacts',
            '_blank',
        )
    }
}

export function openDocs() {
    if (typeof window !== 'undefined') {
        window.open('https://docs.meetingbaas.com/', '_blank')
    }
}

export function loginRedirect(props: { redirect: string }) {
    if (typeof window !== 'undefined') {
        window.location.href = `${process.env.GATSBY_AUTH_URL}/sign-in?redirectTo=${props.redirect}`
    }
}

export function joinDiscord() {
    if (typeof window !== 'undefined') {
        window.open('https://discord.com/invite/dsvFgDTr6c', '_blank')
    }
}

export function openRecallCompetitor() {
    if (typeof window !== 'undefined') {
        window.open('https://recall.ai', '_blank')
    }
}

export function openRecallCompetitorDocs() {
    if (typeof window !== 'undefined') {
        window.open('https://docs.recall.ai', '_blank')
    }
}

export function openTranskriptorCompetitor() {
    if (typeof window !== 'undefined') {
        window.open('https://transkriptor.com/pricing/', '_blank')
    }
}
