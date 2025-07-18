function calcular() {
  const pages = parseInt(document.getElementById('pages').value);
  if (pages < 30) {
    alert("O número mínimo de páginas é 30.");
    return;
  }

  const semanas = 52;
  const total_paginas_ano = pages * semanas;

  const preco_cartucho = 70;
  const rendimento_cartucho = 150;

  const preco_kit_tinta = 225.90;
  const rendimento_tinta_preto = 4500;

  const custo_cartucho = (total_paginas_ano / rendimento_cartucho) * preco_cartucho;
  const custo_tinta = (total_paginas_ano / rendimento_tinta_preto) * preco_kit_tinta;

  const economia = custo_cartucho - custo_tinta;
  const economia_pct = ((economia / custo_cartucho) * 100).toFixed(2);

  document.getElementById("resultado").innerHTML = 
    `<p>Com a Epson EcoTank L1250, você economiza cerca de <strong>R$ ${economia.toFixed(2)}</strong> ao ano.<br>
    Isso representa <strong>${economia_pct}%</strong> de economia em relação a uma impressora com cartucho.</p>`;
}