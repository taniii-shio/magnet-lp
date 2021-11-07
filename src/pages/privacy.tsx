import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { Footer } from "src/components/Footer";
import { TopimgBg } from "../components/organisms/TopimgBg";

export default function Contact() {
  return (
    <>
      <Box w="1300px" mx="auto">
        <TopimgBg />

        <Center mt="30">
          <Heading as="h1" size="2xl" d={["none", "block"]}>
            プライバシーポリシー
          </Heading>
          <Heading as="h1" size="4xl" d={["block", "none"]}>
            プライバシーポリシー
          </Heading>
        </Center>

        <Center>
          <Box w={["70%", "900px"]} mt="50">
            <Text size="md" mt="10">
              １ 個人情報の定義
            </Text>
            <Text size="md">
              本プライバシーポリシーにおける、「個人情報」とは、個人情報の保護に関する法律
              規定される「個人情報」及び当社サービスの利用に係るパスワードを指します。
            </Text>
            <Text size="md" mt="10">
              ２ 個人情報の取得
            </Text>
            <Text size="md">
              当社は、利用目的の達成に必要な範囲で、個人情報を適正に取得し、不正の手段によ
              り取得することはありません。
            </Text>
            <Text size="md" mt="10">
              ３ 利用目的
            </Text>
            <Text size="md">
              当社は、取得した個人情報を以下の目的で利用します。
              ①当社サービスのおける商品の発送、関連するアフターサービス、新商品サービスに
              関する情報の通知 ②当社サービスに関するお問い合わせ等への対応
              ③当社サービスに関する規約等の変更等の通知
            </Text>
            <Text size="md" mt="10">
              ４ 第三者提供
            </Text>
            <Text size="md">
              当社は、法令に定められた場合を除き、あらかじめ利用者の同意を得ないで、第三者
              （日本国外にあるも者を含みます。）に個人情報を提供しません。
            </Text>
            <Text size="md" mt="10">
              ５開示、訂正、利用停止、削除
            </Text>
            <Text size="md">
              当社は、利用者から個人情報の開示、訂正、利用停止、削除を求められたときは、法
              令に定められた場合を除き、本人確認の上で、遅滞なく開示を行います。
              ただし、個人情報の開示につきましては、１件あたり１，０００円の手数料を頂戴し
              ておりますので、あらかじめご了承ください。
            </Text>
            <Text size="md" mt="10">
              ６ お問い合わせ窓口
            </Text>
            <Text size="md">
              個人情報の取り扱いに関するお問い合わせは、下記の窓口までお願いいたします。
              電話番号: --
            </Text>
            <Text size="md" mt="10">
              ７ プライバシーポリシー
            </Text>
            <Text size="md">
              当社は、必要に応じて、本プライバシーポリシーを変更いたします。
              なお、本プライバシーポリシーを変更する場合は、その内容を当社のウェブサイト上
              で表示いたします。 以上
            </Text>
          </Box>
        </Center>
        <Footer />
      </Box>

      {/* responsive */}
    </>
  );
}
