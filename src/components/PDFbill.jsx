import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import logo from "../../public/image/logo.png";
import formatDate from "../helper/formatDate";
import formatHour from "../helper/formatHour";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100, // Ajusta según sea necesario
    height: 100, // Ajusta según sea necesario
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "left",
  },
  boldText: {
    fontWeight: "700",
  },
});

const PDFbill = ({ reservation }) => {
  let name = reservation?.name;
  let address = reservation?.address;
  let postalCode = reservation?.postalCode;
  let city = reservation?.city;
  let country = reservation?.country;
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.title}>Looking</Text>
        </View>
        <View>
          <Text style={styles.text}>
            El hotel reservado es {name} las fechas de entrada y salida son
            desde {formatDate(reservation?.startDate.date)} hasta{" "}
            {formatDate(reservation?.endDate.date)}. Su hora de llegada es{" "}
            {formatHour(reservation?.checkIn.date)} y salida{" "}
            {formatHour(reservation?.checkOut.date)}. Para más información la
            dirección {address}, {postalCode} en {city}, {country}.
          </Text>

          <Text>El número de la habitación es {reservation?.room}.</Text>
          <Text>
            Número de personas: {reservation?.numberAdults} y precio{" "}€
            {reservation?.price}
          </Text>
          <Text>Para más información: {reservation?.email}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFbill;
