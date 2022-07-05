import axios from "axios";

export default axios.create({ 
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
            "Bearer o8C4UwMD7D0Pn160UUuWjo-k_vlnEEB3dYYkTGP1wJJfgPUaDsggAKD-PDO4tnn3mIxfAPYWJ4iHiKoaaN5_Wp-ZxGgXufww5p7FZxqc4X3TgVdWkvPWeI77_Rq-YnYx"
    }
});