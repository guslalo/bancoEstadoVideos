export class videosgeneral {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string;
    prev_page_url?: any;
    from: number;
    to: number;
    video: video[];
}


export class video {
    vid: string;
    name: string;
    detail: string;
    thumb: string;
    size: string;
    show_thumb: string;
    show_title: string;
    mute_start: string;
    autostart: string;
    loop: string;
    category: string;
    total_views: number;
    status: number;
    begins: string;
    video_format: video_format[];
}


export class video_format {
    mp4: mp4[];
    hls: hls[];
}

export class mp4 {
    600:string;
    1200:string;
    2500:string;
    4800:string;
}
export class hls {
    4800:string;
}
