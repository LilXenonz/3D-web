
export async function entries() {
  const modules = import.meta.glob('../*.svx');
  return Object.keys(modules).map((path) => {
    const slug = path.split('/').pop().replace('.svx', '');
    return { slug };
  });
}

export async function load({ params }) {
  const post = await import(`../${params.slug}.svx`);
  return {
    content: post.default,
    ...post.metadata
  };
}
