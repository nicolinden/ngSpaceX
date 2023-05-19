export interface Launch {
    fairings:              Fairings;
    links:                 Links;
    static_fire_date_utc:  Date;
    static_fire_date_unix: number;
    net:                   boolean;
    window:                number;
    rocket:                string;
    success:               boolean;
    failures:              any[];
    details:               string;
    crew:                  any[];
    ships:                 any[];
    capsules:              any[];
    payloads:              string[];
    launchpad:             string;
    flight_number:         number;
    name:                  string;
    date_utc:              Date;
    date_unix:             number;
    date_local:            Date;
    date_precision:        string;
    upcoming:              boolean;
    cores:                 Core[];
    auto_update:           boolean; 
    tbd:                   boolean;
    launch_library_id:     null;
    id:                    string;
    isRead:                boolean;
}

export interface Core {
    core:            string;
    flight:          number;
    gridfins:        boolean;
    legs:            boolean;
    reused:          boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type:    string;
    landpad:         string;
}

export interface Fairings {
    reused:           boolean;
    recovery_attempt: boolean;
    recovered:        boolean;
    ships:            any[];
}

export interface Links {
    patch:      Patch;
    reddit:     Reddit;
    flickr:     Flickr;
    presskit:   string;
    webcast:    string;
    youtube_id: string;
    article:    string;
    wikipedia:  string;
}

export interface Flickr {
    small:    any[];
    original: string[];
}

export interface Patch {
    small: string;
    large: string;
}

export interface Reddit {
    campaign: null;
    launch:   string;
    media:    string;
    recovery: null;
}