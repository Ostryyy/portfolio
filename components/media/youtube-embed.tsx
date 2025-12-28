type Props = {
  youtubeId: string;
  title?: string;
};

export function YouTubeEmbed({ youtubeId, title = "Project demo" }: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;

  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
