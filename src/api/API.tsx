const searchGithub = async () => {
  try {
    // Rango más seguro para obtener usuarios válidos
    const start = Math.floor(Math.random() * 1000) + 1;

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error de respuesta de GitHub:", data);
      throw new Error("Respuesta inválida de la API");
    }

    console.log("✅ Usuarios devueltos por GitHub:", data);
    return data;
  } catch (err) {
    console.error("⚠️ Error al buscar usuarios:", err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error al obtener usuario:", data);
      throw new Error("Respuesta inválida de la API");
    }

    return data;
  } catch (err) {
    console.error("⚠️ Error al buscar usuario por nombre:", err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
