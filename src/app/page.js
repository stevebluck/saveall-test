const emojies = {
  heart: "❤️",
  wizard: "🧙‍♂️",
  star: "⭐️",
};

async function getData() {
  return {
    name: "Stephen Bluck",
    streak: 92,
    topEmoji: {
      name: "wizard",
      label: "Wizard",
    },
    cardsQty: 4244,
    followers: [
      { id: 1, name: "Dave", mutualFriends: 1, following: true },
      { id: 2, name: "Bob", mutualFriends: 1, following: false },
    ],
    following: [],
    updates: [
      {
        id: 1,
        type: "STREAK",
        label: "Stephen got a 5 day streak!",
        date: "Yesterday",
        emojies: [
          {
            name: "heart",
            count: 1,
          },
        ],
      },
      {
        id: 2,
        type: "CARD_ADDED",
        label: "Stephen added 10 cards",
        date: "8 days ago",
        emojies: [
          {
            name: "star",
            count: 1,
          },
        ],
      },
      {
        id: 3,
        type: "SHARE",
        label: "Stephen shared Phisics",
        date: "Today",
        meta: "with PositiveKoala521",
        emojies: [
          {
            name: "star",
            count: 1,
          },
        ],
      },
    ],
  };
}

export default async function Home() {
  const data = await getData();

  const following = data.followers.filter((person) => person.following);

  const addFollower = async (id) => {};

  return (
    <main className="container mx-auto max-w-screen-lg px-4">
      {/* Profile details */}
      <section className="pt-10">
        <div className="flex flex-col items-center">
          <div className="rounded-full w-24 h-24 bg-blue-400"></div>
          <h1>{data.name}</h1>
          <span>
            {data.followers.length} following &middot; {following.length}{" "}
            followers
          </span>
        </div>
      </section>

      {/*  Overview emoji things */}
      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <ul className="grid md:grid-cols-3 gap-4">
            <li>
              <div className="bg-white rounded-lg border flex flex-col items-center p-4">
                <div className="text-6xl">🔥</div>
                <div className="text-lg font-bold">{data.streak}</div>
                <div className="uppercase text-gray-500">Best streak</div>
              </div>
            </li>
            <li>
              <div className="bg-white rounded-lg border flex flex-col items-center p-4">
                <div className="text-6xl">{emojies[data.topEmoji.name]}</div>
                <div className="text-lg font-bold">{data.topEmoji.label}</div>
                <div className="uppercase text-gray-500">Top emoji</div>
              </div>
            </li>
            <li>
              <div className="bg-white rounded-lg border flex flex-col items-center p-4">
                <div className="text-6xl">🚀</div>
                <div className="text-lg font-bold">{data.cardsQty}</div>
                <div className="uppercase text-gray-500">Cards</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <h2 className="text-center text-gray-500 font-medium text-2xl mb-4">
            Updates
          </h2>
          <ul className="bg-white rounded-xl border divide-y">
            {data.updates.map((update) => (
              <li key={update.id} className="flex p-4">
                <div className="flex flex-col justify-center">
                  <div className="rounded-full w-24 h-24 bg-blue-400"></div>
                </div>
                <div className="flex-1 px-4 flex flex-col justify-center">
                  <h3 className="text-lg">{update.label}</h3>
                  <div className="text-gray-500">{update.date}</div>
                </div>
                <div className="text-6xl flex flex-col justify-center">
                  {emojies[typeEmoji[update.type]]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-screen-md">
          <ul>
            {data.followers.map((person) => (
              <li
                key={person.id}
                className="flex p-4 bg-white border rounded-xl "
              >
                <div className="flex flex-col justify-center">
                  <div className="rounded-full w-24 h-24 bg-blue-400"></div>
                </div>
                <div className="flex-1 px-4 flex flex-col justify-center">
                  <h3 className="text-lg">{person.name}</h3>
                  <div className="text-gray-500">
                    {person.mutualFriends} mutual friend
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <button type="button">Following</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

const typeEmoji = {
  STREAK: "star",
  CARD_ADDED: "star",
  SHARE: "heart",
};
