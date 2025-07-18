
function calcularEconomia() {
  const paginasMes = parseInt(document.getElementById("paginasMes").value);
  if (isNaN(paginasMes) || paginasMes <= 0) {
    document.getElementById("resultado").innerHTML = "<p>Insira a quantidade de páginas/mês.</p>";
    document.getElementById("economia-anual").innerHTML = "";
    return;
  }

  const precoCartucho = 70.0;
  const rendimentoCartucho = 150;
  const precoKitTinta = 225.90;
  const rendimentoTintaPreto = 4500;

  const custoPorPaginaCartucho = precoCartucho / rendimentoCartucho;
  const custoPorPaginaEcoTank = precoKitTinta / rendimentoTintaPreto;

  const totalPaginasAno = paginasMes * 12;
  const custoCartucho = totalPaginasAno * custoPorPaginaCartucho;
  const custoEcoTank = totalPaginasAno * custoPorPaginaEcoTank;
  const economia = custoCartucho - custoEcoTank;
  const economiaPercentual = (economia / custoCartucho) * 100;

  let resultado = "<p><strong>Comparativo anual:</strong></p>";
  resultado += "<p>Impressora com cartucho: R$ " + custoCartucho.toFixed(2) + "</p>";
  resultado += "<p>Impressora Epson L1250: R$ " + custoEcoTank.toFixed(2) + "</p>";
  resultado += "<p><strong>Economia anual:</strong> R$ " + economia.toFixed(2) + " (" + economiaPercentual.toFixed(1) + "%)</p>";

  document.getElementById("resultado").innerHTML = resultado;

  mostrarEconomiaAnual(paginasMes);
}

function mostrarEconomiaAnual(paginasMes) {
  const precoCartucho = 70.0;
  const rendimentoCartucho = 150;
  const precoKitTinta = 225.90;
  const rendimentoTintaPreto = 4500;

  const custoPorPaginaCartucho = precoCartucho / rendimentoCartucho;
  const custoPorPaginaEcoTank = precoKitTinta / rendimentoTintaPreto;

  const anos = [1, 2, 3];
  let resultadoHTML = '';

  anos.forEach(ano => {
    const totalPaginas = paginasMes * 12 * ano;
    const custoCartucho = totalPaginas * custoPorPaginaCartucho;
    const custoEcoTank = totalPaginas * custoPorPaginaEcoTank;
    const economia = custoCartucho - custoEcoTank;
    const economiaPercentual = (economia / custoCartucho) * 100;

    if (economia > 0) {
      resultadoHTML += `
        <p><strong>💰 Economia em ${ano} ano${ano > 1 ? 's' : ''}:</strong> R$ ${economia.toFixed(2)} (${economiaPercentual.toFixed(1)}%)</p>
      `;
    }
  });

  const economiaAnualDiv = document.getElementById("economia-anual");
  if (economiaAnualDiv) {
    economiaAnualDiv.innerHTML = resultadoHTML;
  }
}

window.onload = calcularEconomia;
