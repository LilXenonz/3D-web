export const prerender = true;

/** Tell SvelteKit which [slug] pages to prerender */
export async function entries() {
  const modules = import.meta.glob('../*.svx');
  return Object.keys(modules).map((path) => {
    const slug = path.split('/').pop().replace('.svx', '');
    return { slug };
  });
}

/** Load the content for the individual blog post */
export async function load({ params }) {
  const post = await import(`../${params.slug}.svx`);
  const { title, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
  };
}
