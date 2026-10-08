function Text(text, maxLength = 200, visibleChars = 20) {
    if (!text || text.length <= maxLength) {
        return text;
    }
    let startPart = text.slice(0, visibleChars);

    let endPart = text.slice(-visibleChars);
    let middleLength = text.length - (visibleChars * 2);
    let mask = ".".repeat(middleLength);
    return `${startPart}${mask}${endPart}`;
}

let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt sunt laborum possimus architecto et ipsa velit eveniet voluptatibus a nihil sit perferendis necessitatibus, minus culpa dolore aut repellat accusamus? Rem porro nostrum, corrupti esse consequatur eius facilis nihil temporibus id repellat omnis qui provident assumenda soluta laudantium dolor veniam explicabo pariatur, fugiat at asperiores officia dicta! Est nihil iure recusandae reiciendis nobis reprehenderit consectetur repellendus, aliquid cupiditate illum ex tempora veritatis non numquam dolores vitae at hic sit molestiae explicabo dolore. Facere dolorem minima in eaque, eveniet placeat laudantium harum incidunt ipsa, recusandae dignissimos quis molestias eos neque. Sed voluptatem necessitatibus, eaque tempore cupiditate, explicabo reprehenderit unde deserunt similique earum perspiciatis ipsum veritatis molestias nihil dolor a repellendus molestiae hic labore tenetur ab enim mollitia blanditiis iste? Hic excepturi nesciunt voluptates consequuntur at et illum, architecto ab quod. Repudiandae voluptatibus nemo quisquam! Temporibus, dolorem aut. Excepturi fugiat nemo ipsam ex, praesentium tempore laborum quas autem aperiam a suscipit, consequuntur rem nisi! Tempora, et fugit. Atque cumque quasi voluptatem maxime distinctio ab, tempora molestias temporibus eveniet quisquam dicta eum alias, voluptate impedit architecto, maiores fugiat placeat? Tempore optio provident tempora, error neque commodi, accusamus a voluptatibus facere eligendi voluptas vel.";

let result = Text(longText);
console.log(result);