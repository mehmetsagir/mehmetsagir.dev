export async function getEvents() {
  const response = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/events`
  );
  if (!response.ok) return [];

  const data = await response.json();

  const getDataValue = (event: any) => {
    const values = {
      type: event.type,
      created_at: event.created_at,
      repo_name: event.repo.name,
      actor: event.actor.login,
      actor_link: `https://github.com/${event.actor.login}`,
      repo_url: `https://github.com/${event.repo.name}`
    };

    switch (event.type) {
      case 'PushEvent':
        return {
          ...values,
          commits: event.payload.commits.map((commit: any) => ({
            message: commit.message,
            link: `https://github.com/${event.repo.name}/commit/${commit.sha}`
          }))
        };
      case 'ForkEvent':
        return {
          ...values,
          title: event.payload.forkee.name,
          link: event.payload.forkee.html_url
        };
      case 'PullRequestEvent':
        return {
          ...values,
          title: event.payload.pull_request.title,
          link: event.payload.pull_request.html_url
        };
      case 'IssuesEvent':
        return {
          ...values,
          title: event.payload.issue.title,
          link: event.payload.issue.html_url
        };
    }
  };

  return data.map((event: any) => getDataValue(event)).filter(Boolean);
}
