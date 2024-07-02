package nl.hva.backend;

import nl.hva.backend.repositories.GameBoardRepository;
import nl.hva.backend.services.GameBoardService;
import nl.hva.backend.utils.DummyDataGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
public class GameBoardRepoTest {

    @LocalServerPort
    private int port;

    @Autowired
    private GameBoardRepository repo;

    @Autowired
    private GameBoardService service;

    @Test
    public void T1_userCanCreateAGame() {
        service.getDefaultGameBoard();

        assertEquals(
                DummyDataGenerator.getDefaultGameBoard().getName(),
                repo.findBy(DummyDataGenerator.getDefaultGameBoard().getName()).get().getName()
        );
    }


}
