package nl.hva.backend.domain.models.game.board;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.hva.backend.domain.models.game.board.location.Location;
import nl.hva.backend.domain.models.game.card.Card;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity

@Getter
@Setter
@NoArgsConstructor

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = GameBoard.class
)
public class GameBoard {
    public final static int FIRST_POSITION = 1;
    public final static int LAST_POSITION = 40;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany(mappedBy = "gameBoard", fetch = FetchType.EAGER)
    private List<Location> locations;

    @OneToMany(mappedBy = "gameBoard")
    private List<Card> cards;

    public GameBoard(String name) {
        this.name = name;
    }

    public void add(Location location) {
        if (location == null) return;

        if (getLocations() == null || !(getLocations() instanceof ArrayList))
            setLocations(new ArrayList<>(Objects.requireNonNullElse(getLocations(), List.of())));

        getLocations().add(location);
    }

    public void add(Card card) {
        if (card == null) return;

        if (getCards() == null || !(getCards() instanceof ArrayList))
            setCards(new ArrayList<>(Objects.requireNonNullElse(getCards(), List.of())));

        getCards().add(card);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GameBoard gameBoard)) return false;
        return getId() == gameBoard.getId();
    }

    @Override
    public int hashCode() {
        return Long.hashCode(getId());
    }

}