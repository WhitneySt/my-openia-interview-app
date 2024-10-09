import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyzeAnswer } from "../redux/interviewSlice/interviewSlice";


const InterviewAnalyzer = () => {
  const [question, setQuestion] = useState(
    "¿Cuál es tu mayor fortaleza como profesional?"
  );
  const [userResponse, setUserResponse] = useState("");

  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.interview.feedback);
  const status = useSelector((state) => state.interview.status);

  const handleAnalyze = () => {
    if (question.trim() && userResponse.trim()) {
      dispatch(analyzeAnswer({ question, response: userResponse }));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simulador de Entrevista</h1>
      <div>
        <label>Pregunta de la Entrevista:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>Tu Respuesta:</label>
        <textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          style={{
            width: "100%",
            height: "150px",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
      </div>
      <button
        onClick={handleAnalyze}
        style={{ padding: "10px 20px", background: "lightblue" }}
      >
        Analizar Respuesta
      </button>

      {status === "loading" && <p>Analizando...</p>}
      {status === "succeeded" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Resultados del Análisis:</h3>
          <p>
            <strong>Claridad:</strong> {feedback.claridad}
          </p>
          <p>
            <strong>Relevancia:</strong> {feedback.relevancia}
          </p>
          <p>
            <strong>Formalidad:</strong> {feedback.formalidad}
          </p>
          <p>
            <strong>Sugerencias:</strong> {feedback.sugerencias}
          </p>
        </div>
      )}
      {status === "failed" && <p>Error al analizar la respuesta</p>}
    </div>
  );
};

export default InterviewAnalyzer;
