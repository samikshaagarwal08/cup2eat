
interface InstagramReelCardProps {
    url: string;
    title: string;
}

export default function InstagramReelCard({
    url,
    title,
}: InstagramReelCardProps) {
    const match = url.match(/\/(reel|p|tv)\/([^/?#]+)/);

    const embedUrl = match
        ? `https://www.instagram.com/${match[1]}/${match[2]}/embed`
        : null;

    return (
        <div className="overflow-hidden rounded-[18px] border border-border-soft bg-paper">
            {embedUrl ? (
                <iframe
                    src={embedUrl}
                    title={title}
                    className="h-auto min-h-165 w-full"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
                <div className="flex h-160 items-center justify-center p-5 text-sm text-muted">
                    Invalid Instagram URL
                </div>
            )}
        </div>
    );
}
