class Github {
    constructor() {
        this.client_id = '019f26e02253eb33d023';
        this.client_secret = 'dd89c0e551d92c5640524d5931fbb25a8b9cfbf6';
        this.repos_count = 5;
        this.repos_sort = 'creat: asc';
    };

    async getUser(user) {
        const profileResponse = await fetch
            (`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();  // promise 的值

        console.log(profile);



        const reposResponse = await fetch
            (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const userRepos = await reposResponse.json();


        return {
            pro: profile,
            userRepos
        };
    };
};