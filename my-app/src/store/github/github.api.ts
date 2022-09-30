import { ServerResponse, IUser, IRepo } from './../../modals/modals';
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

//ამას ვუკავშირებთ ჩვენს store - ს
export const githubApi = createApi({
    reducerPath: 'github/api',  // არის string რომელიც გვეუბნება რა მისამართზე შეინახება მონაცემები story - ში, api-სთან მუშაობის დროს
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/' // გადვცემთ url-ს 
    }),

    refetchOnFocus: true, // refetchOnFocus

    //ვაბრუნებთ ობიექტს რომელიც იღებს ენდფოინტებს
    endpoints: build => ({
        //endpont - ების სახელებს ჩვენ ვირჩევთ
        // build.query -  გამოიყენება მოთხოვნების გასაგზავნად და ინფორმაციის წამოსაღებად
        searchUsers: build.query<IUser[], string>({ // json2ts
            query: (search:string) => ({
                url: 'search/users', // უკავშირდება ბაზის URL-ს
                params:{
                    q:search,
                    per_page: 10,
                }
            }),

            //ვაბრუნებთ მხოლოდ item ებს
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),

        // აგზავნის მოთხოვნას, მომხმარებლის რეპოზიტორების წამოსაღებად
        getUserRepos: build.query<IRepo[], string>({
            query: (username:string) => ({
                url: `users/${username}/repos`
            })
        }),


        // თუ ბექენდზე მხარდაჭერა გვაქვს, შექმნაც შეგვიძლია
        createUser: build.mutation<any,void>({
            query: () => ''
        })
    })
})

// ესჰუკები ავტომატურად გენერირდება, იმისდა მიხედვით თუ რას მივუთითებთ endpoint ებში
export const {useSearchUsersQuery, useLazyGetUserReposQuery, } = githubApi;
// lazy -  აუტომატურად რექუესტის გაკეთებისაგან თავი, რომ ავირიდოთ