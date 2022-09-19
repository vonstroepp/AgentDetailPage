export type Asset = {
    login: {
        username: string;
        uuid: string;
    }
    name: {
        first: string;
        last: string;
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
        dob: {
            age: string;
            date: string;
        }
        picture: {
            large: string;
        }
        gender: string;
    }
}