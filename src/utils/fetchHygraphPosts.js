import axios from "axios";

const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT;
const HYGRAPH_TOKEN = import.meta.env.VITE_HYGRAPH_TOKEN;

export async function fetchHygraphPosts() {
  const query = `
    {
      posts {
        id
        title
        slug
        createdAt
        content {
          html
        }
        technologies {
          html
        }
        githubLink
        demoLink
        image {
          url
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      HYGRAPH_ENDPOINT,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HYGRAPH_TOKEN}`,
        },
      },
    );

    if (response.data.errors) {
      throw new Error(response.data.errors.map((e) => e.message).join(", "));
    }

    console.log("Posts data:", response.data.data.posts);

    // Yangi qo'shilganlar birinchi bo'lishi uchun tartiblash (createdAt bo'yicha, agar mavjud bo'lsa)
    const posts = response.data.data.posts;
    if (posts.length && posts[0].createdAt) {
      return posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    }
    // Agar createdAt yo'q bo'lsa, id bo'yicha teskari tartiblash (odatda yangi id yuqorida bo'ladi)
    return posts.reverse();
  } catch (error) {
    return [];
  }
}
