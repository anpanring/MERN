let restaurants

export default class RestaurantsDAO {
    static async injectDB(conn) { //for connecting to database
        if(restaurants) {
            return
        }
        try  {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        } catch(e) {
            console.error(
                `Unable to extablish a connection handle in restaurantsDAO: $(e)`,
            )
        }
    }

    static async getRestaurants({ //Getting list of all restaurants in database
        //options when calling method
        filters = null,
        page = 0,
        restaurantsPerPage = 20,
    } = {}) {
        let query
        if(filters) {
            if("name" in filters){
                query = {$text: {$search: filters["name"]}}
            }
        }
    }
}