export const estimateTokenCount = (text) => {
  // Aproximación: 1 token equivale a 3.5 caracteres en español
  const charactersPerToken = 3.5;

  // Elimina espacios en blanco adicionales y cuenta la longitud del texto
  const cleanedText = text.trim();

  // Calcular el número estimado de tokens
  const estimatedTokens = Math.ceil(cleanedText.length / charactersPerToken);

  return estimatedTokens;
};

export const calculateCharactersForTokens = (tokens) => {
  // Aproximación: 1 token ≈ 3.5 caracteres en español
  const charactersPerToken = 3.5;

  // Calcular la cantidad de caracteres
  const characterCount = tokens * charactersPerToken;

  return characterCount;
};