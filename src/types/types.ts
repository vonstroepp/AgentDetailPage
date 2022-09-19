export type Asset = {
    login: {
        username: string;
        uuid: string;
    }
    name: {
        first: string;
        last: string;
    }
    dob: {
        age: string;
        date: string;
    }
    picture: {
        large: string;
    }
    location: {
        city: string;
        state: string;
        country: string;
        coordinates: {
            longitude: string;
            latitude: string;
        }
        timezone: {
            offset: string;
            description: string;
        }
    }
    gender: string;
}