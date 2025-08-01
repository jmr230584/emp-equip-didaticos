import express from "express";
import { SERVER_ROUTES } from "./appConfig";
import UsuarioController from "./controller/ControllerUsuario";
import EquipamentoController from "./controller/ControllerEquipamento";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensagem: "Rota padrão" })
});

// CRUD Usuario
router.get(SERVER_ROUTES.LISTAR_USUARIO, UsuarioController.todos);
router.post(SERVER_ROUTES.NOVO_USUARIO, UsuarioController.cadastrar);
router.delete(SERVER_ROUTES.REMOVER_USUARIO, UsuarioController.remover);
router.put(SERVER_ROUTES.ATUALIZAR_USUARIO, UsuarioController.atualizar);

router.get(SERVER_ROUTES.LISTAR_EQUIPAMENTO, EquipamentoController.todos);
router.post(SERVER_ROUTES.NOVO_EQUIPAMENTO, EquipamentoController.cadastrar);
router.delete(SERVER_ROUTES.REMOVER_EQUIPAMENTO, EquipamentoController.remover);
router.put(SERVER_ROUTES.ATUALIZAR_EQUIPAMENTO, EquipamentoController.atualizar);

export { router }
