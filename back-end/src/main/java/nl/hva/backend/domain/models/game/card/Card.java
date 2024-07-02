package nl.hva.backend.domain.models.game.card;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.hva.backend.domain.models.game.board.GameBoard;
import nl.hva.backend.domain.models.game.board.location.Location;
import nl.hva.backend.domain.models.game.card.impl.*;

import javax.persistence.*;

/**
 * TODO JavaDoc
 *
 * @author Hamza el Haouti
 */
// Lombok
@Getter
@Setter
@NoArgsConstructor

// JPA
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)

// Jackson ORM config for inheritance.
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "classType"
)
@JsonSubTypes({
        @Type(value = FreeMoneyCard.class, name = "FreeMoneyCard"),
        @Type(value = GoToJailCard.class, name = "GoToJailCard"),
        @Type(value = JailBreakCard.class, name = "JailBreakCard"),
        @Type(value = MoveTokenCard.class, name = "MoveTokenCard"),
        @Type(value = MoveTokenToPositionCard.class, name = "MoveTokenToPositionCard"),
        @Type(value = PayMoneyCard.class, name = "PayMoneyCard"),
})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Card.class
)
public abstract class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private CardType type;

    @ManyToOne
    private GameBoard gameBoard;

    /**
     * TODO JavaDoc
     */
    public Card(
            String description,
            CardType type
    ) {
        this.description = description;
        this.type = type;
    }

    public enum CardType {
        CHEST,
        CHANCE
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Location location)) return false;
        return getId() == location.getId();
    }

    @Override
    public int hashCode() {
        return (int) (getId() ^ (getId() >>> 32));
    }
}