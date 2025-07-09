import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardHeader from "@mui/material/CardHeader";
import { IoClose } from "react-icons/io5";
const Cards = () => {

  const { cards, status } = useSelector((state) => state.cards);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsData, setCardsData] = useState(cards || []);

  useEffect(() => {
    if (cards) {
      setCardsData(cards);
    }
  }, [cards]);

  useEffect(() => {
    if (cards.length) {
      setTotalPages(parseInt(cardsData.length / 6));
    }
  }, [cardsData]);

  const handleRemoveCard = (id) => {
    setCardsData((priv) => priv.filter((card) => card.id !== id));
  };

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };
  
  const startIndex = (currentPage - 1) * 6;
  const currentCards = cardsData.slice(startIndex, startIndex + 6);

  if (status === "loading") return <h1>Loading...</h1>;
  return (
    <div className="container">
      <div className="cards-container">
        {currentCards.slice(0, 6)?.map((data) => (
          <Card key={data.id} sx={{ maxWidth: 355 }}>
            <CardHeader
              action={
                <IoClose size={30} onClick={() => handleRemoveCard(data.id)} />
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {data.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Cards;
