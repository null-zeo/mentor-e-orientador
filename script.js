const form = document.getElementById("careerForm");
const resultado = document.getElementById("resultado");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const area = document.getElementById("area").value;
    const habilidade = document.querySelector('input[name="habilidade"]:checked');
    const trabalho = document.querySelector('input[name="trabalho"]:checked');

    if (!area || !habilidade || !trabalho) {
      resultado.textContent = "Por favor, responda todas as perguntas antes de continuar.";
      resultado.style.background = "#fff7ed";
      resultado.style.color = "#b45309";
      return;
    }

    const match = {
      tecnologia: {
        criatividade: "Design de Produtos",
        logica: "Desenvolvimento de Software",
        comunicacao: "Product Management",
        lideranca: "Arquitetura de Sistemas"
      },
      design: {
        criatividade: "Design UX/UI",
        logica: "Motion Design",
        comunicacao: "Branding",
        lideranca: "Direção de Arte"
      },
      dados: {
        criatividade: "Visualização de Dados",
        logica: "Analista de Dados",
        comunicacao: "Business Intelligence",
        lideranca: "Data Science"
      },
      marketing: {
        criatividade: "Marketing Digital",
        logica: "Growth Marketing",
        comunicacao: "Relacionamento e Vendas",
        lideranca: "Gestão de Marca"
      },
      saude: {
        criatividade: "Tecnologia em Saúde",
        logica: "Administração Hospitalar",
        comunicacao: "Atendimento e Saúde",
        lideranca: "Gestão de Saúde"
      },
      negocios: {
        criatividade: "Empreendedorismo",
        logica: "Consultoria",
        comunicacao: "Vendas",
        lideranca: "Gestão de Negócios"
      }
    };

    const recomendacao =
      match[area]?.[habilidade.value] ||
      "Carreira em expansão com boa oportunidade de crescimento";

    resultado.textContent = `Com base no seu perfil, a melhor área para você pode ser: ${recomendacao}.`;
    resultado.style.background = "#ecfdf5";
    resultado.style.color = "#166534";
  });
}
