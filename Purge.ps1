Login-AzureRmAccount -TenantId f042135a-ca67-4927-966f-88a28005ec39
$ResourceGroupName = "spdavid"
$ProfileName = "spdavid"
$EndpointName = "spdavid2"
$PurgeFolder = "/*"


Unpublish-AzureRmCdnEndpointContent -ResourceGroupName $ResourceGroupName -ProfileName $ProfileName -EndpointName $EndpointName -PurgeContent $PurgeFolder

