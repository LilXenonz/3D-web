export const prerender = true;

export async function entries() {
  const modules = import.meta.glob('../*.svx');
  return Object.keys(modules).map((path) => {
    const slug = path.split('/').pop().replace('.svx', '');
    return { slug };
  });
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../${params.slug}.svx`);
  const { title, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
  };
};
