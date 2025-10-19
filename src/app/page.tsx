import Link from "next/link";

const mockUrls = [
"https://dcp4kemtua.ufs.sh/f/XP407RAOeM73sKpitDn4xMr1cJQtLVoOaWUqnz9Kl6vuIF0f",
"https://dcp4kemtua.ufs.sh/f/XP407RAOeM73XUPfETsAOeM73SWd8PLZtp6AxYh5zC0li4fv",
"https://dcp4kemtua.ufs.sh/f/XP407RAOeM73nCj0ZL14xmTOFeUQGr6oJv9StPKwCIiEqh0l"
]
const mockNames = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockNames.map((image) => (
          <div key={image.id} className="w-48>">
            <img src={image.url} />
          </div>
        ))
      }
      </div>
    </main>
    );
}
