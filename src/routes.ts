import express from "express";
import { SERVER_ROUTES } from "./appConfig";
import UsuarioController from "./controller/ControllerUsuario";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensagem: "Rota padrão" })
});

// CRUD Usuario
router.get(SERVER_ROUTES.LISTAR_USUARIO, UsuarioController.todos);
router.post(SERVER_ROUTES.NOVO_USUARIO, UsuarioController.cadastrar);
router.put(SERVER_ROUTES.REMOVER_USUARIO, UsuarioController.remover);
router.put(SERVER_ROUTES.ATUALIZAR_USUARIO, UsuarioController.atualizar);

export { router }