document
  .getElementById("btnEnviar")
  .addEventListener("click", async function () {
    try {
      // pegar nomes
      const names = [
        document.getElementById("nome1").value,
        document.getElementById("nome2").value,
        document.getElementById("nome3").value,
        document.getElementById("nome4").value,
        document.getElementById("nome5").value,
      ];

      // pegar mensagem
      const message = document.getElementById("historia").value.trim();

      // montar JSON
      const data = {
        names: names,
        message: message,
      };

      // enviar POST
      const response = await fetch(
        "https://fsdt-contact.onrender.com/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      // limpar campos
      document.getElementById("nome1").value = "";
      document.getElementById("nome2").value = "";
      document.getElementById("nome3").value = "";
      document.getElementById("nome4").value = "";
      document.getElementById("nome5").value = "";
      document.getElementById("historia").value = "";

      alert("Formulário enviado com sucesso!");
    } catch (error) {
      alert("Ocorreu um erro ao enviar o formulário.");

      console.error(error);
    }
  });
