
import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {

    try {
        // Check if the request is allowed by the rate limiter
        const {success} = await ratelimit.limit("my-rate-limit");

        // If the request is allowed, proceed to the next middleware
        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later.",
                retryAfter: ratelimit.reset,
            });
        
        }
            
        next();

    } catch (error) {
        console.log("Rate limiter error:", error);
        next(error);
        
    }
 
}


export default rateLimiter;